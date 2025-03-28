import './SocialPage.scss'

function SocialPage() {


    return (
        <>
            <div className='social-page'>
                <section className='social-page__headline'>
                    <h1>Hi User!</h1>

                </section>
                <section className='social-page__friends'>
                    <h2>Your Friends</h2>
                    <div className="social-page__friends-container">
                        <img src='https://picsum.photos/500/201' alt='phFriend 1' className='social-page__friends-img' />
                        <img src='/public/images/win_oscars.jpg' alt='phFriend 2' className='social-page__friends-img' />
                        <img src='https://picsum.photos/500/202' alt='phFriend 3' className='social-page__friends-img' />
                        <img src='/public/images/win_oscars.jpg' alt='phFriend 4' className='social-page__friends-img' />
                    </div>
                </section>
                <section className='social-page__trending'>
                    <div className='social-page__trending-friends'>
                        <h3>Here's what they've been watching</h3>
                        <div className='social-page__trending-friends-scroll'>
                            <article className='social-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto1' className='social-page__trending-img' />
                                <p>details</p>
                            </article>
                            <article className='social-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto2' className='social-page__trending-img' />
                                <p>details</p>
                            </article>
                            <article className='social-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto3' className='social-page__trending-img' />
                                <p>details</p>
                            </article>
                            <article className='social-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto4' className='social-page__trending-img' />
                                <p>details</p>
                            </article>
                            <article className='social-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto5' className='social-page__trending-img' />
                                <p>details</p>
                            </article>
                        </div>
                    </div>

                </section>
            </div>
        </>
    );
}

export default SocialPage;