export const weatherJsonFetcher = async (url) => {
  try {
    const resp = await fetch(url);
    if (resp.ok) {
      const data = await resp.json();
      return { data, error: null };
    }
  } catch (e) {
    console.error(e);
    return { data: [], error: e.message };
  }
};
