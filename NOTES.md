# 📓 Marmar Tech Stack & Architecture

## 🏗️ Folder Structure Strategy
We use **Feature-based Architecture**. Each feature (Posts, Stories, Auth) is self-contained inside `src/features/`.
- `components/`: Pure UI components for this feature.
- `services/`: API calls and logic (to keep components clean).
- `store/`: Redux slices for local state management.

## 🔴 State Management (Redux Toolkit)
- **Insight on Hooks**: We use `useAppDispatch` and `useAppSelector` from `@/store/hooks` for full TypeScript safety.
- **Store Setup**: The store is created via `makeStore` to support Next.js SSR requirements.

## 📡 Data Fetching Strategy
- **Server Components**: Used for initial data fetching (e.g., getting posts on Home Page) for better SEO and performance.
- **Redux**: Used for interactive state (e.g., toggling likes, updating comments without page refresh).

## 📝 Future Tasks (TODO)
- [ ] Connect `postSlice.ts` to the main store.
- [ ] Implement Optimistic Updates for the Like button.
- [ ] Set up DB connection in `lib/db.ts`.