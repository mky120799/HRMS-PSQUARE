const BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log(BASE_URL);

//fetch candidate
export const fetchCandidates = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch candidates");
  return res.json();
};


// add candidate
export const addCandidate = async (candidateData) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(candidateData),
  });
  if (!res.ok) throw new Error("Failed to add candidate");
  return res.json();
};


// delete Candidate
export const deleteCandidate = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete candidate");
  return res.json();
};
