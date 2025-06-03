#!/bin/bash
set -e

REPO_DIR="/app"  # Cambialo si tu repo no está en /app dentro del contenedor
BRANCH_MAIN="main"
BRANCH_TEST="test"
REMOTE="origin"

cd "$REPO_DIR" || { echo "❌ ERROR: No se puede entrar a $REPO_DIR"; exit 1; }

echo "✅ Cambiando a $BRANCH_MAIN y trayendo últimos cambios..."
git checkout $BRANCH_MAIN || { echo "❌ ERROR: No se pudo cambiar a $BRANCH_MAIN"; exit 1; }
git pull $REMOTE $BRANCH_MAIN || { echo "❌ ERROR: Falló git pull de $BRANCH_MAIN"; exit 1; }

echo "✅ Cambiando a la rama $BRANCH_TEST..."
if git show-ref --verify --quiet refs/heads/$BRANCH_TEST; then
  git checkout $BRANCH_TEST
else
  echo "🔧 La rama $BRANCH_TEST no existe localmente, se crea desde $BRANCH_MAIN"
  git checkout -b $BRANCH_TEST
fi

echo "✅ Sincronizando $BRANCH_TEST con remoto..."
if git ls-remote --heads $REMOTE $BRANCH_TEST | grep $BRANCH_TEST > /dev/null; then
  git pull $REMOTE $BRANCH_TEST
else
  echo "📦 La rama $BRANCH_TEST no existe en remoto, se creará al hacer push"
fi

echo "🚀 Haciendo push a $BRANCH_TEST..."
git push -u $REMOTE $BRANCH_TEST || { echo "❌ ERROR: Falló git push a $BRANCH_TEST"; exit 1; }

echo "🎉 Pipeline completado con éxito."
