export async function GET() {
  const query = `
  {
    user(login: "${process.env.GITHUB_USERNAME}") {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
      followers {
        totalCount
      }
      following {
        totalCount
      }
      repositories(privacy: PUBLIC) {
        totalCount
      }
    }
  }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  

  const json = await res.json();

  if (!json.data) {
    return Response.json({ error: "GitHub API error", details: json });
  }

  const user = json.data.user;

  const weeks = user.contributionsCollection.contributionCalendar.weeks;
  const days = weeks.flatMap((w: any) => w.contributionDays);

  // 🔥 Calculate streak
  let currentStreak = 0;
  let maxStreak = 0;
  let tempStreak = 0;

  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].contributionCount > 0) {
      tempStreak++;
      if (i === days.length - 1) currentStreak = tempStreak;
    } else {
      tempStreak = 0;
    }
    maxStreak = Math.max(maxStreak, tempStreak);
  }

  return Response.json({
    totalContributions:
      user.contributionsCollection.contributionCalendar.totalContributions,
    followers: user.followers.totalCount,
    following: user.following.totalCount,
    repos: user.repositories.totalCount,
    currentStreak,
    maxStreak,
    days,
  });
}