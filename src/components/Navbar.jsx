import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import gsap from "gsap";
const Header = styled.header`
  width: 100vw;
  height: 6rem;
  background-color: #0e100f;
  display: flex;
`;

const TextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 20px;
  align-items: center;
  h1 {
    padding: 10px 30px;
    /* background-color: #9fe500; */

    font-family: var(--fontR);
    z-index: 1000000;
  }
  ul {
    display: flex;
    gap: 10px;
  }
`;

const StyledLi = styled.li`
  border: 2px solid #9fe500;
  border-radius: 30px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  a {
    z-index: 100;
    h1 {
      color: white;
      transition: color 0.3s ease;
    }
  }
  div {
    position: absolute;
  }
  :hover {
    h1 {
      color: black;
    }
  }
`;

const NavBar = () => {
  const circle1 = useRef();
  const circle2 = useRef();
  const circle3 = useRef();
  const circle4 = useRef();
  const circle5 = useRef();

  const liRef1 = useRef(null);
  const liRef2 = useRef(null);
  const liRef3 = useRef(null);
  const liRef4 = useRef(null);
  const liRef5 = useRef(null);

  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (event, ref, circle) => {
    const containerRect = ref.current.getBoundingClientRect();
    const containerLeft = containerRect.left;
    const containerTop = containerRect.top;
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    const x = event.clientX - containerRect.left;
    const y = event.clientY - containerRect.top;
    const mitadAncho = containerRect.width / 2;
    const mitadAltura = containerRect.height / 2;

    console.log({ x, y });

    if (x <= mitadAncho && y <= mitadAltura) {
      console.log("Cuadrante Superior Izquierdo");
      gsap.killTweensOf(circle.current);

      // Inicia la nueva animación
      gsap.to(circle.current, {
        x: -10,
        y: -20,
        width: "200px",
        height: "200px",
        borderRadius: "100px",
        backgroundColor: "#fffce1",
        duration: 0.5,
      });
    } else if (x > mitadAncho && y <= mitadAltura) {
      console.log("Cuadrante Superior Derecho");
      gsap.killTweensOf(circle.current);

      // Inicia la nueva animación
      gsap.to(circle.current, {
        x: 110, // Mueve el círculo 120 unidades hacia la izquierda desde su posición actual
        y: -30, // Ajusta según tu necesidad
        width: "200px",
        height: "200px",
        borderRadius: "100px",
        backgroundColor: "#fffce1",
        scaleX: 2.5,
        duration: 0.5,
      });
    } else if (x <= mitadAncho && y > mitadAltura) {
      console.log("Cuadrante Inferior Izquierdo");
      gsap.killTweensOf(circle.current);

      // Inicia la nueva animación
      gsap.to(circle.current, {
        x: -10,
        y: 30,
        width: "200px",
        height: "200px",
        borderRadius: "100px",
        backgroundColor: "#fffce1",
        duration: 0.5,
      });
    } else {
      console.log("Cuadrante Inferior Derecho");
      console.log("Cuadrante Inferior Izquierdo");
      gsap.killTweensOf(circle.current);

      // Inicia la nueva animación
      gsap.to(circle.current, {
        x: 110, // Mueve el círculo 120 unidades hacia la izquierda desde su posición actual
        y: 30, // Ajusta según tu necesidad
        width: "200px",
        height: "200px",
        borderRadius: "100px",
        backgroundColor: "#fffce1",
        scaleX: 2.5,
        duration: 0.5,
      });
    }
    // Calcular la posición del círculo dentro del contenedor
    const circleX = event.clientX - containerLeft;
    const circleY = event.clientY - containerTop;

    // Asegurarse de que el círculo no se salga de los límites del contenedor
    const boundedX = Math.max(0, Math.min(circleX, containerWidth));
    const boundedY = Math.max(0, Math.min(circleY, containerHeight));

    setCirclePosition({ x: boundedX, y: boundedY });
  };

  const handleMouseLeave = (circle) => {
    if (circle.current) {
      // Detiene y limpia cualquier animación en curso en el elemento
      gsap.killTweensOf(circle.current);

      // Inicia la nueva animación
      gsap.to(circle.current, {
        width: "0px",
        height: "0px",
        duration: 0.5,
      });
    }

    gsap.killTweensOf(circle.current);

    // Inicia la nueva animación
    gsap.to(circle.current, {
      width: "0px",
      height: "0px",
    });
  };

  return (
    <Header>
      <TextContainer>
        <nav>
          <ul>
            <StyledLi
              li={"1"}
              ref={liRef1}
              onMouseLeave={() => handleMouseLeave(circle1)}
              onMouseEnter={(e) => handleMouseEnter(e, liRef1, circle1)}
            >
              <div
                ref={circle1}
                style={{
                  position: "absolute",
                }}
              />
              <a href="">
                <h1>Inicio</h1>
              </a>
            </StyledLi>

            <StyledLi
              li={"2"}
              ref={liRef2}
              onMouseLeave={() => handleMouseLeave(circle2)}
              onMouseEnter={(e) => handleMouseEnter(e, liRef2, circle2)}
            >
              <div
                ref={circle2}
                style={{
                  position: "absolute",
                }}
              />
              <a href="">
                <h1>Mis habilidades</h1>
              </a>
            </StyledLi>
            <StyledLi
              li={"3"}
              ref={liRef3}
              onMouseLeave={() => handleMouseLeave(circle3)}
              onMouseEnter={(e) => handleMouseEnter(e, liRef3, circle3)}
            >
              <div
                ref={circle3}
                style={{
                  position: "absolute",
                }}
              />
              <a href="">
                <h1>Sobre mi</h1>
              </a>
            </StyledLi>
            <StyledLi
              li={"4"}
              ref={liRef4}
              onMouseLeave={() => handleMouseLeave(circle4)}
              onMouseEnter={(e) => handleMouseEnter(e, liRef4, circle4)}
            >
              <div
                ref={circle4}
                style={{
                  position: "absolute",
                }}
              />
              <a href="">
                {" "}
                <h1>Proyectos</h1>
              </a>
            </StyledLi>
            <StyledLi
              li={"5"}
              ref={liRef5}
              onMouseLeave={() => handleMouseLeave(circle5)}
              onMouseEnter={(e) => handleMouseEnter(e, liRef5, circle5)}
            >
              <div
                ref={circle5}
                style={{
                  position: "absolute",
                }}
              />
              <a href="">
                <h1>Contacto</h1>
              </a>
            </StyledLi>
          </ul>
        </nav>
      </TextContainer>
    </Header>
  );
};

export default NavBar;
