export async function getGithubStats(username: string) {
  const userRes = await fetch(`https://api.github.com/users/${username}`);
  const reposRes = await fetch(`https://api.github.com/users/${username}/repos`);
  const eventsRes = await fetch(`https://api.github.com/users/${username}/events`);

  const user = await userRes.json();
  const repos = await reposRes.json();
  const events = await eventsRes.json();

  // Approx contributions from events
  const contributions = events.length;

  return {
    followers: user.followers,
    following: user.following,
    publicRepos: user.public_repos,
    contributions,
  };
}