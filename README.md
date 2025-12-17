# Mini-app Collaboratif

Application React + TypeScript + Vite pour le développement collaboratif.

## 🚀 Guide de collaboration

### Installation du projet

1. Cloner le dépôt:
```bash
git clone <URL_DU_REPO>
cd Mini-app--Collab
```

2. Installer les dépendances:
```bash
npm install
```

3. Lancer le projet en mode développement:
```bash
npm run dev
```

### Workflow Git pour la collaboration

1. **Créer une branche** pour chaque nouvelle fonctionnalité:
```bash
git checkout -b feature/nom-de-la-fonctionnalite
```

2. **Faire des commits réguliers** avec des messages clairs:
```bash
git add .
git commit -m "feat: description de la fonctionnalité"
```

3. **Pousser la branche** vers le dépôt distant:
```bash
git push origin feature/nom-de-la-fonctionnalite
```

4. **Créer une Pull Request** sur GitHub/GitLab pour la revue de code

### Convention de nommage des commits

- `feat:` - Nouvelle fonctionnalité
- `fix:` - Correction de bug
- `docs:` - Documentation
- `style:` - Formatage, ponctuation
- `refactor:` - Refactorisation du code
- `test:` - Ajout de tests
- `chore:` - Tâches de maintenance

### Règles de collaboration

- ✅ Toujours travailler sur une branche dédiée
- ✅ Synchroniser régulièrement avec la branche `main`
- ✅ Tester le code avant de pousser
- ✅ Écrire des messages de commit descriptifs
- ✅ Demander une revue de code avant le merge

---

## 📦 Configuration technique

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
