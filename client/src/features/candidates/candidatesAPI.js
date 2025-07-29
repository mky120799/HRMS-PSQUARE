const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const createCandidate = async (formData) => {
  const res = await fetch(`${BASE_URL}/candidates`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) throw new Error("Failed to create candidate");
  return res.json();
};

export const getCandidates = async () => {
  const res = await fetch(`${BASE_URL}/candidates`);
  if (!res.ok) throw new Error("Failed to fetch candidates");
  return res.json();
};
