import axios from "axios";
import { ClipBoard } from "../models/clipboard";
export const CreateAClipBoardItem = async (
  clip: string
): Promise<ClipBoard> => {
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
  return res.data as ClipBoard;
};

export const GetAClipBoardItemById = async (id: string): Promise<ClipBoard> => {
  var config = {
    method: "get",
    url: "http://localhost:4001/api/v1/clips/" + id,
    headers: {},
  } as any;
  let res = await axios(config);
  return res.data as ClipBoard;
};
