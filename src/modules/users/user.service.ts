import { Types } from "mongoose";
import { FriendRequestModel } from "./friend.model.js";

export class FriendService {
  async acceptFriendRequest({
    requestId,
    userId,
  }: {
    requestId: string;
    userId: Types.ObjectId;
  }) {
    const friendRequest = await FriendRequestModel.findOneAndUpdate(
      {
        _id: requestId,
        receiverId: userId,
        status: "PENDING",
      },
      {
        $set: {
          status: "ACCEPTED",
        },
      },
      {
        new: true,
      },
    );

    if (!friendRequest) {
      throw new Error("Friend request not found or already accepted");
    }

    return friendRequest;
  }
}

export const friendService = new FriendService();
