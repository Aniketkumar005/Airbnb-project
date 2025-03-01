
const express = require("express");
const router = express.Router({ mergeParams:true });
const Listing = require("../models/listing.js");
const wrapAsync=require("../utils/wrapAsync");
const Review = require("../models/review.js");
const { validateReview , isLoggedIn, isReviewAuthor} = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

//Review
//Post Route

router.post("/",isLoggedIn, validateReview,  wrapAsync(reviewController.createReview)); 

//Delete Route

router.delete("/:reviewId",isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview)) ; 

module.exports=router;