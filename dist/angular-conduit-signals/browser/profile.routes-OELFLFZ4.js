import {
  ARTICLE_TYPE,
  provideArticleType
} from "./chunk-DWHKMSLL.js";
import "./chunk-L2PTVQBO.js";
import "./chunk-GDGJH4RA.js";

// src/app/profile/profile.routes.ts
var profileRoutes = [
  {
    path: "",
    loadComponent: () => import("./profile-article-list.component-Q2Z36IZY.js"),
    providers: [provideArticleType(ARTICLE_TYPE.MyArticle)]
  },
  {
    path: "favorites",
    loadComponent: () => import("./profile-article-list.component-Q2Z36IZY.js"),
    providers: [provideArticleType(ARTICLE_TYPE.FavoritedArticle)]
  }
];
var profile_routes_default = profileRoutes;
export {
  profile_routes_default as default
};
//# sourceMappingURL=profile.routes-OELFLFZ4.js.map
