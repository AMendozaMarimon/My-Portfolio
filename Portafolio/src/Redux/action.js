export const CHANGE_IDIOM = "CHANGE_IDIOM";

export function changeIdioms(idiom) {
  const newIdiom = idiom === "ES" ? "EN" : "ES";
  return {
    type: CHANGE_IDIOM,
    payload: newIdiom,
  };
}
