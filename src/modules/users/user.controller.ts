import { Router } from "express";
import { friendService } from "./friend.service.js";
import { authentication } from "../../middlewares/auth.middleware.js";

const router = Router();

router.patch("/:requestId/accept", authentication, async (req, res, next) => {
  try {
    const result = await friendService.acceptFriendRequest({
      requestId: req.params.requestId,
      userId: req.user._id,
    });

    return res.status(200).json({
      success: true,
      message: "Friend request accepted successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
