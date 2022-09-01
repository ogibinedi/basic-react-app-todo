import ItemList from './ItemList';

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
        <section>
            <article>
                {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
                ) : (
                    <p style={{ marginTop: '2rem'}}>Your list is empty. Please add the task.</p>
                )}
            </article>
        </section>
    </main>
  );
};

export default Content;