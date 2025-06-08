import { PointerHighlight } from "./Pointer";
export function PointerHighlightDemo() {
  return (
    <div className="mt-10 w-full text-center md:text-left"> {/* Wrapper plein écran pour gérer le centrage */}
      <PointerHighlight containerClassName="inline-block"> {/* Container ajusté à la taille du bouton */}
        <a
          href="https://calendly.com/agenceaetheria/30min"
          className="button inline-block"
          style={{ maxWidth: "fit-content" }}
        >
          <span>Prendre rendez-vous</span>
        </a>
      </PointerHighlight>
    </div>
  );
}
