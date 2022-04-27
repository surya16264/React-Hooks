import './Loader.style.scss';

const Loader = (props) => {
    const { isLoading } = props;
    console.log(props)
    if(!isLoading) return null;

    const renderMain = () => {
        return (
            <div className="Loader Main">
                <span />
            </div>
        );
    }

    return (
        <div className="Loader">
            <div className="Scale">
                { renderMain() }
            </div>
        </div>
    );
}

export default Loader