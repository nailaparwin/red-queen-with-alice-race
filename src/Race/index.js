import React, {useEffect} from 'react'
import './style.css';
import useWebAnimations from "@wellyshen/use-web-animations";
let pbr = 1;
let pbr_anim = 1;
function Race() {
    const sceneryFrames =   [
        { transform: 'translateX(100%)' },
        { transform: 'translateX(-100%)' }   
      ];
      
      const sceneryTimingBackground = {
        duration: 36000,
        iterations: Infinity,
        playbackRate: 1
      };
      
      const sceneryTimingForeground = {
        duration: 12000,
        iterations: Infinity,
        playbackRate: 1
      };
      
      const bk1 = useWebAnimations({
        keyframes: sceneryFrames,
        timing: sceneryTimingBackground,
      });

      const bk2 = useWebAnimations({
        keyframes: sceneryFrames,
        timing: sceneryTimingBackground,
      });

      const fg1 = useWebAnimations({
        keyframes: sceneryFrames,
        timing: sceneryTimingForeground,
      });

      const fg2 = useWebAnimations({
        keyframes: sceneryFrames,
        timing: sceneryTimingForeground,
      });

      var spriteFrames = [
        { transform: 'translateY(0)' },
        { transform: 'translateY(-100%)' }   
      ];

      const queenTiming = {
        easing: 'steps(7, end)',
        direction: "reverse",
        duration: 1000,
        playbackRate: 1,
        iterations: Infinity
      }
      const queen = useWebAnimations({
        keyframes: spriteFrames,
        timing: queenTiming,
      });

      const sceneries = [fg1, fg2, bk1, bk2];

      const adjustBackgroundPlayback = () => {         
        if (pbr < .8) {
            pbr_anim = (pbr/2) * -1;
         
        } else if (pbr > 1.2) {
            pbr_anim = pbr/2;
         
        } else {
            pbr_anim = .8;
        }   

        // sceneries.forEach(function(anim) {
        //     anim.getAnimation().playbackRate = pbr_anim;    
        //   });
        bk1.getAnimation().playbackRate = pbr_anim;
        bk2.getAnimation().playbackRate = pbr_anim;
        fg1.getAnimation().playbackRate = pbr_anim;
        fg2.getAnimation().playbackRate = pbr_anim;
      }

      

      const goFaster = () => {
        /* But you can speed them up by giving the screen a click or a tap. */        
        pbr *= 1.1; 
        queen.getAnimation().playbackRate = pbr;        
        adjustBackgroundPlayback();
      }
      
      
      
useEffect(()=>{    
    setInterval( function() {
        /* Set decay */
        if (pbr > .4) {
            queen.getAnimation().playbackRate *= .9;    
        } 
        adjustBackgroundPlayback();
      }, 6000);

    document.addEventListener("click", goFaster);
    document.addEventListener("touchstart", goFaster);
})
    return (
        <div>
               
<div className="wrapper" style={{border:'2px solid red'}}>
  <div className="sky"></div>
  <div className="earth">
    <div id="red-queen_and_alice" >
      <img id="red-queen_and_alice_sprite" 
      ref={queen.ref}
      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" 
      srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place."/>
    </div>
  </div>

  <div className="scenery" id="foreground1" ref={fg1.ref}>
    <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
  </div>
  <div className="scenery" id="foreground2" ref={fg2.ref}>    
    <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
    <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
  </div>
  <div className="scenery" id="background1" ref={bk1.ref}>
    <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
    <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
    <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />
  </div>
  <div className="scenery" id="background2" ref={bk2.ref}>
    <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" " />

    <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" " />
    <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
  </div>
</div>
        </div>
    )
}

export default Race

