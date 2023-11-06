import Logo from "../components/waqar/Logo";

const pageWaqar = () => {
  return (
    <>
      <h1>Haris Waqar</h1>
      <Logo />
      <p>
        Ho fatto un git checkout sul branch secondario, e poi fatto git rebase
        di master
      </p>

      {/* DOMANDA ES 4 */}
      <h3>
        la mia branch dedicata è indietro di qualche commit rispetto a master,
        come faccio a portarla avanti? Cioè, come faccio a portare le modifiche
        fatte su master sulla mia branch dedicata?
      </h3>
      <p>
        Per portare avanti la mia branch dedicata rispetto a master, posso
        utilizzare il comando `git merge`
      </p>
    </>
  );
};

export default pageWaqar;
