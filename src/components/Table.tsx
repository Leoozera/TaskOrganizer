export const Table = () => {
  return (
    <div className="table w-full p-10 bg-zinc-900">
      <div className="table-header-group">
        <div className="table-row">
          <div className="table-cell text-left p-3">Matéria</div>
          <div className="table-cell text-left p-3">Professor</div>
          <div className="table-cell text-left p-3">Pendências</div>
          <div className="table-cell text-left p-3 lg:hidden">Ações</div>
        </div>
      </div>
      <div className="table-row-group bg-zinc-700">
        <div className="table-row">
          <div className="table-cell p-3">Python - IA & Machine Learning</div>
          <div className="table-cell p-3">Professor Pedro Vidal</div>
          <div className="table-cell p-3">1</div>
          <button className="rounded-full bg-yellow-500 px-2">Remover</button>
        </div>
      </div>
      <div className="table-row-group bg-zinc-900">
        <div className="table-row">
          <div className="table-cell p-3">Javascript to Typescript</div>
          <div className="table-cell p-3">Professor Marcelo Goes</div>
          <div className="table-cell p-3">2</div>
          <button className="rounded-full bg-yellow-500 px-2">Remover</button>
        </div>
      </div>
      <div className="table-row-group bg-zinc-700">
        <div className="table-row">
          <div className="table-cell p-3">UI Frameworks</div>
          <div className="table-cell p-3">Professor Leo Stronda</div>
          <div className="table-cell p-3">2</div>
          <button className="rounded-full tex bg-yellow-500 px-2">Remover</button>
        </div>
      </div>
      <div className="table-row-group bg-zinc-900">
        <div className="table-row">
          <div className="table-cell p-3">Flutter for N2 level</div>
          <div className="table-cell p-3">Professor Breno Massa</div>
          <div className="table-cell p-3">10</div>
          <button className="rounded-full bg-yellow-500 px-2">Remover</button>
        </div>
      </div>
      <div className="table-row-group bg-zinc-700">
        <div className="table-row">
          <div className="table-cell p-3">Cache using AWS Dynamo DB</div>
          <div className="table-cell p-3">Professor José Brasilino</div>
          <div className="table-cell p-3">2</div>
          <button className="rounded-full bg-yellow-500 px-2">Remover</button>
        </div>
      </div>
    </div>
  );
};
