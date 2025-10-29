#  Rick and Morty Explorer

Une application **React + TypeScript + TailwindCSS** permettant d’explorer les personnages de **Rick and Morty**, avec **pagination**, **recherche en temps réel**, et une **barre latérale interactive**.

---
## Prérequis:
- Node.js (v16+) / vérifier : node --version
- npm (v8+) / vérifier : npm --version
- Git / vérifier : git --version

## Fonctionnalités

-  **Recherche en temps réel** par nom de personnage  
-  **Pagination intégrée** avec gestion des pages suivante / précédente  
-  **Interface moderne et responsive** grâce à TailwindCSS  
-  **Sidebar interactive** pour les filtres optionnels  
-  **Configuration des variables d’environnement** via le fichier `.env.local`

---

##  stack Technique

- **React**
- **TypeScript**
- **TailwindCSS** 
- **Rick and Morty API** → [https://rickandmortyapi.com/](https://rickandmortyapi.com/)
-  **Vite** 

---

##  Installation & configuration

- git clone https://github.com/Marwa-Mnif/orisha-project.git
- cd orisha-project
- Create .env.local file with this content: VITE_API_BASE_URL=https://rickandmortyapi.com/api
- npm install (si erreur try npm install --legacy-peer-deps)
- npm run dev ou npx vite
- Access the project on localhost:5173
  
---

## Choix techniques:
**Choix du framework & bundler**: 
React + TypeScript (strict) : typage fort, requis par l’énoncé, qualité et ergonomie.

**Styling** : 
Tailwind CSS avec préfixe tw- : utility-first pour prototypage rapide, cleanness des classes (préfixe pour éviter collisions).


**Iconographie & SVG**
lucide-react pour icônes : léger, React-friendly.

**Architecture (hooks / components / context)**

** Hooks dédiés pour fetching et logique :**
- useCharacters(params) — pagination, filtre, recherche.
- useCharacterDetails(id) — détails, loading, error.
- useEpisodes(episodeUrls) — récupère tous les épisodes en 1 appel (ids groupés).
- useDebounce — pour la recherche.
- Components réutilisables : CharacterItem, FavoriteButton, Pagination, FullPageLoader, FullPageError, Sidebar, BackButton, Title, Search, -  CharacterMainProperties, BackToTopButton, etc.

** Context (FavoritesContext):**
- Gère une liste favorites: Character[], toggleFavorite(character), isFavorite(id).
- Initialisé depuis localStorage (lazy init) et persiste via useEffect.
=> Raison : permet la synchro reactive entre composants (navbar badge, favorites page) sans Redux.

**Performance & Optimisation**
- React.memo sur les composants concernés.
- useCallback  pour le callback props.
- useMemo fpour la mémorisation des calculs.
- Props stable


**Gestion des erreurs & Error Boundary**
- Implementation d'un composant ErrorBoundary pour capter les erreurs et affiche une page d'erreur user-friendly
- Try/catch sur tous les appels API 
- Retour sous forme { data, loading, error } pour tous les appels API.
- Fournir l'option "réessayer" e cas d'erreurs

