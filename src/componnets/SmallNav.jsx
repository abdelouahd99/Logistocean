"use client"

export default function SmallNav() {
  return (
    <div className="Progresse">
      <style jsx>{`
        .Progresse {
          position: fixed;
          top: 0;
          left: 0;
          width: 15px;
          height: 10px; /* Slightly increased height */
          background-color:rgb(0, 0, 0);
          z-index: 9999; /* Higher than the navbar */
          animation: Progresse linear forwards;
          animation-timeline: scroll();
        }

        @keyframes Progresse {
          0% {
            width: 10px;
            background-color:rgb(0, 0, 0); /* Your navbar color */
          }
          30% {
            background-color:rgb(47, 56, 67); /* Keeping consistent color */
          }
          6 0% {
            width: 50%;
            background-color:rgb(36, 93, 129); /* Keeping consistent color */
          }
          100% {
            width: 100%;
            background-color:#2972b6; /* Keeping consistent color */
          }
        }
      `}</style>
    </div>
  )
}

