import Logo from "../components/waqar/Logo";

const pageWaqar = () => {
  return (
    <>
      <h1>Haris Waqar</h1>
      <Logo />

      <h1>Haris Waqar</h1>
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

      {/* ES 5 */}
      <p>Nachos</p>
      <p>Pasta</p>
      <p>Cotoletta</p>
      <p>Tiramisu</p>

      {/* Domanda ES 5 */}
      <p>
        Per unire multipli commit in unico commit posso usare git rebase -i, poi
        modificare la parola pick in corrispondenza dei commit che si vuole
        unire in squash.
      </p>

      {/* Domanda ES 6 */}
      <p>The weekend</p>

      <p>Tom holland</p>
      <p>Ronaldo</p>

      <p>
        sSì, esiste un modo per unire tutti i commit in un unico commit quando si
        esegue il merge su master utilizzando il comando git merge --squash
      </p>

    </>
  );
};

export default pageWaqar;
