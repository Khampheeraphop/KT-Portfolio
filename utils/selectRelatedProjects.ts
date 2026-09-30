/** Fisher–Yates shuffle of a copy; server-selected results hydrate consistently. */
export function selectRelatedProjects<T extends { id: string }>(
  projects: readonly T[],
  currentId: string,
  count = 3,
  random: () => number = Math.random,
): T[] {
  const candidates = projects.filter(project => project.id !== currentId);
  for (let index = candidates.length - 1; index > 0; index--) {
    const other = Math.floor(random() * (index + 1));
    [candidates[index], candidates[other]] = [candidates[other], candidates[index]];
  }
  return candidates.slice(0, Math.max(0, count));
}
