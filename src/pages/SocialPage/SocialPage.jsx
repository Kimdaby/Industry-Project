import './SocialPage.scss'

function SocialPage() {


    return (
        <>
            <section className='social-page__headline'>
                <h1>Hi User!</h1>
                <h2>Your Friends</h2>
            </section>
            <section className='social-page__friends'>
                <div className="social-page__friends-container">
                    <img src='https://picsum.photos/500/201' alt='phFriend 1' className='social-page__friends-img'/>
                    <img src='/public/images/win_oscars.jpg' alt='phFriend 2' className='social-page__friends-img'/>
                    <img src='https://picsum.photos/500/202' alt='phFriend 3' className='social-page__friends-img'/>
                    <img src='/public/images/win_oscars.jpg' alt='phFriend 4' className='social-page__friends-img'/> 
                </div>
            </section>
        </>
    );
}

export default SocialPage;