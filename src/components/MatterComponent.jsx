import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const MatterBackground = () => {
  const canvasRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const attractiveBodyRef = useRef(null);
  const mousePositionRef = useRef({ x: 0, y: 0 }); // Store mouse position

  useEffect(() => {
    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    // Matter.js setup
    const Engine = Matter.Engine;
    const Runner = Matter.Runner;
    const Render = Matter.Render;
    const World = Matter.World;
    const Body = Matter.Body;
    const Events = Matter.Events;
    const Bodies = Matter.Bodies;
    const Common = Matter.Common;

    // Create engine and world
    engineRef.current = Engine.create();
    const engine = engineRef.current;
    const world = engine.world;
    world.gravity.scale = 0; // Disable gravity

    // Set up the Matter.js renderer
    renderRef.current = Render.create({
      element: canvasRef.current,
      engine: engine,
      options: {
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: "transparent",
      },
    });

    // Run the engine and render
    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(renderRef.current);

    // Create a static "attractive body" at the cursor position
    const attractiveBody = Bodies.circle(dimensions.width / 2, dimensions.height / 2, 30, {
      isStatic: true,
      render: { fillStyle: "transparent" },
    });

    attractiveBodyRef.current = attractiveBody;
    World.add(world, attractiveBody);

    // Add particles to the world
    for (let i = 0; i < 60; i += 1) {
      const x = Common.random(0, dimensions.width);
      const y = Common.random(0, dimensions.height);
      const s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
      const polygonNumber = Common.random(3, 6);
      const body = Bodies.polygon(x, y, polygonNumber, s, {
        mass: s / 80,
        friction: 0,
        frictionAir: 0.02,
        angle: Math.round(Math.random() * 360),
        render: {
          fillStyle: "#6495ED",
          strokeStyle: "#00FFFF",
          lineWidth: 2,
          opacity:0.1
        },
      });

      World.add(world, body);
    }

    // Update mouse position on move
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      mousePositionRef.current = { x: clientX, y: clientY };

      // Move the attractor towards the mouse position
      Body.setPosition(attractiveBody, {
        x: clientX,
        y: clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Add attraction logic
    Events.on(engine, "beforeUpdate", () => {
      const attractorPosition = attractiveBody.position;
      const particles = world.bodies.filter(body => !body.isStatic); // Get all particles

      particles.forEach((particle) => {
        // Calculate distance to attractor
        const dx = attractorPosition.x - particle.position.x;
        const dy = attractorPosition.y - particle.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Apply force towards attractor only if within a certain distance
        if (distance < dimensions.width) { // Attraction range
          const forceMagnitude = (1 - distance / 200000) * 0.000015; // Control strength of attraction
          Body.applyForce(particle, particle.position, {
            x: (dx / distance) * forceMagnitude,
            y: (dy / distance) * forceMagnitude,
          });
        }
      });
    });

    // Handle window resize for responsive canvas
    const handleResize = () => {
      dimensions.width = window.innerWidth;
      dimensions.height = window.innerHeight;
      renderRef.current.canvas.width = dimensions.width;
      renderRef.current.canvas.height = dimensions.height;
    };

    window.addEventListener("resize", handleResize);

    // Clean up on component unmount
    return () => {
      Matter.Render.stop(renderRef.current);
      Matter.Runner.stop(runner);
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
      renderRef.current.canvas.remove();
      renderRef.current.textures = {};

      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1, // Keep background
        width: "100%",
        height: "100%",
        pointerEvents: "none", // Ensure no interference with page interactions
      }}
    />
  );
};

export default MatterBackground;
