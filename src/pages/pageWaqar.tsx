import Logo from "../components/waqar/Logo";

const pageWaqar = () => {
  return (
    <>
      <h1>Haris Waqar</h1>
      <Logo />

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
    </>
  );
};

export default pageWaqar;
