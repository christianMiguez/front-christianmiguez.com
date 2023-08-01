export const getImage = (fullUrlString: string) => {
  // Split the URL string by slashes and get the last element
  const parts = fullUrlString.split("/");
  const filename = parts[parts.length - 1];

  return process.env.NEXT_PUBLIC_SERVER_URL + "/assets/images/" + filename;
};
