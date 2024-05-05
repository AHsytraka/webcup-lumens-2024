import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/all";
import '../styles/motion.css';

export default function Motionn({ updateScore }) { // Accept updateScore as prop
  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);
    let counter = 0;
    let intervalId;

    const defa = document.querySelector("#defa");

    defa.addEventListener("mouseenter", () => {
      intervalId = setInterval(() => {
        counter += 1;
        console.log(counter);
        updateScore(counter); // Update score whenever counter changes
      }, 50);
    });

    defa.addEventListener("mouseleave", () => {
      clearInterval(intervalId);
    });

        let anchors = [{x:10, y:100},{x:100, y:100},{x:200, y:0}, {x:0, y:10}, {x:300, y:100}, {x:300, y:150},{x:100, y:200},{x:200, y:100},{x:250, y:10}, {x:300, y:0},{x:400, y:200},{x:450, y:0},{x:500, y:200},{x:550, y:0},{x:600, y:200},{x:700, y:100},{x:690, y:20},{x:650, y:150},{x:850, y:100}]; // anchor coordinates 
        let rawPath = MotionPathPlugin.arrayToRawPath(anchors, {curviness:1});
        let path = document.querySelector("#path");
        let svg = document.querySelector("#svg");
        
        path.setAttribute("d", MotionPathPlugin.rawPathToString(rawPath));
        path.setAttribute("stroke", "transparent");
        svg.setAttribute("fill", "transparent");
        
        for (let i = 0; i < anchors.length; i++) {
            createSVG("circle", svg, {cx: anchors[i].x, cy: anchors[i].y, r: 6});
        }
        
        function createSVG (type, container, attributes) {
            var element = document.createElementNS("http://www.w3.org/2000/svg", type),
                reg = /([a-z])([A-Z])/g,
                p;
            for (p in attributes) {
                element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
            }
            container.appendChild(element);
            return element;
        }

        gsap.to("#defa", {
            duration:12,
            align: "svg",
            ease: "power1.inOut",
            motionPath:{
                path: "#path",
                align: "#path",
                autoRotate: true,
                alignOrigin: [0.5, 0.5]
            }
        });
    }, []);

    return (
        <div className="motion">
            <div id="defa"></div>
            <svg id="svg" viewBox="0 0 800 400">
                <path id="path" />
            </svg>
        </div>
    );
}
