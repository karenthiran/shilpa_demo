
const SectionTitle = ({ Title, Content, list,para }) => {
    return (
        <div className='mt-5'>
            <h2 className='fs-1 text-center text-lg-start ' dangerouslySetInnerHTML={{ __html: Title }}/>
            {para && <p className='text-center text-lg-start'>{para}</p>}
            {Content &&
                <p>{Content}</p>
            }

            {list && <ul>
                {list.map((item, idx) => (
                    <li key={idx}>{item}</li>

                ))}
            </ul>
            }

        </div>
    );
};

export default SectionTitle;