class GalleryController {
  constructor($firebaseAuth, GalleryService) {
    this._GalleryService = GalleryService;

    this.list = this._GalleryService.all();
    this.newImage = this._GalleryService.new();
  }

  /* STEP 1 - This should call the add method on your
    GalleryService and pass in the newImage you're
    trying to create */

  addImage() {
  }
}

export default GalleryController;
