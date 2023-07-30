const stringCorrector = (
  routeString: string,
  refactor: boolean = false
): string => {
  const beginningPattern = /^\d+-/;
  let cleanedRoute = routeString.replace(beginningPattern, "");
  const trailingPattern = /\/\d+(\-|$)/g;
  cleanedRoute = cleanedRoute.replace(trailingPattern, "/");

  if (refactor) {
    cleanedRoute = cleanedRoute.replace(/-/g, " ");
  }

  return cleanedRoute;
};

export default stringCorrector;
