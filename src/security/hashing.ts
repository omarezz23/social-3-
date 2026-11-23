import bcrypt from "bcrypt";

export const hash = async (
  plainText: string,
  Rounds: number = 12,
  minor: "a" | "b" = "b"
): Promise<string> => {
  const salt = await bcrypt.genSalt(Rounds, minor);
  return await bcrypt.hash(plainText, salt);
};

export const compare = async (
  plainText: string,
  hashed: string
): Promise<boolean> => {
  return await bcrypt.compare(plainText, hashed);
};