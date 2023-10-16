import a from '../assets/A.jpeg';
import b from '../assets/B.jpg';
const Slides=()=>{
    return(
<div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={a} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={b} class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    );
};
export default Slides;