import Link from 'next/link';

export default function Home() {
  return (
    <div className="entirePage">
      <div className="title">(I_n_t_e_r_n_e_t_F_o_r_T_h_e_D_a_y)</div>
      <Link href="/videoPlayer">
        <a className="button">The internet awaits...</a>
      </Link>
      <style jsx>{`
        .entirePage {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-image: url('/images/catTransparent70.jpg');
          background-size: cover;
        }

        .title {
          font-family: 'ribbons-and-banners';
          font-size: 800%;
        }

        .button {
          font-family: 'market-deco';
          font-size: 125%;
          text-decoration: none;
          color: black;
          border: solid 2px black;
          border-radius: 3px;
          padding: 10px;
          margin-top: 30px;
        }

        .button:hover {
          background-color: rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  );
}
