export const extractImageString = (fullUrlString: string) => {
  // Split the URL string by slashes and get the last element
  const parts = fullUrlString.split("/");
  const filename = parts[parts.length - 1];

  return filename;
};
