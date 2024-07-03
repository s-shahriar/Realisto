export const CardFetcher = async () => {
    const res =  await fetch("/data.json");
    const data = await res.json();
    return data;
  };
