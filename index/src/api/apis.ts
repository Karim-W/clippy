import axios from "axios";
export const CreateAClipBoardItem = async (
  clip: string
): Promise<Clipboard> => {
  var data = JSON.stringify({
    clip: clip,
  });

  var config = {
    method: "post",
    url: "http://localhost:4000/api/v1/clips",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  } as any;

  let res = await axios(config);
  let response = res.data as Clipboard;
  return response;
};
