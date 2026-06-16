export function goToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
