import "./style.css";
import "./main.scss";
import AnimationHeader from './js/components/AnimationHeader';

(function () {
  const animationObject = [
    {
      item: ".reconstructionStub__header",
      classActive: "reconstructionStub__header_anim-active"
    }

  ];
  const animationHeader = new AnimationHeader(animationObject);
})();
