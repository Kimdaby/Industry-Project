import React from 'react'
import './CollectionsPage.scss'

function ColllectionsPage() {
    return (
        <>
            <div className='category-page'>
            <section className='category-page__headline'>
                <button className='category-page__back-button' onClick={() => window.history.back()}>
                    <img src='/public/images/211686_back_arrow_icon.svg' alt='Back' className='category-page__back-icon'/>
                </button>
            </section>
            <section className='empty-box'>
                <div className='box'></div>
            </section>

            <section className='category-title__container'>
                <div className='category-title__text'>Fantasy Family</div>
                <div className='wrapper'>
                    <div className='circle-group'>
                        <div className='circle circle--white'></div>
                        <div className='circle circle--gray'></div>
                        <div className='circle circle--dark'></div>
                </div>
                    <div className='category-title__friends'>You, Caleb, and 6 others</div>
                </div>
                </section>

                <section className='category-page__trending'>
                    <div className='category-page__trending-friends'>
                        <h3 className='category-page__trending-headline'>Keep Up With Friends</h3>
                        <div className='category-page__trending-friends-scroll'>
                            <article className='category-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto1' className='category-page__trending-img' />
                            </article>
                            <article className='category-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto2' className='category-page__trending-img' />
                            </article>
                            <article className='category-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto3' className='category-page__trending-img' />
                            </article>
                            <article className='category-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto4' className='category-page__trending-img' />
                            </article>
                            <article className='category-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto5' className='category-page__trending-img' />
                            </article>
                        </div>
                    </div>
                </section>

                <section className='category-page__trending'>
                    <div className='category-page__trending-friends'>
                        <h3 className='category-page__trending-headline'>Circle Recomendations</h3>
                        <div className='category-page__trending-friends-scroll'>
                            <article className='category-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto1' className='category-page__trending-img' />
                            </article>
                            <article className='category-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto2' className='category-page__trending-img' />
                            </article>
                            <article className='category-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto3' className='category-page__trending-img' />
                            </article>
                            <article className='category-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto4' className='category-page__trending-img' />
                            </article>
                            <article className='category-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto5' className='category-page__trending-img' />
                            </article>
                        </div>
                    </div>
                </section>
                <section className='category-page__trending'>
                    <div className='category-page__trending-friends'>
                        <h3 className='category-page__trending-headline'>Recent Watch History</h3>
                        <div className='category-page__trending-friends-scroll'>
                            <article className='category-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto1' className='category-page__trending-img' />
                            </article>
                            <article className='category-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto2' className='category-page__trending-img' />
                            </article>
                            <article className='category-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto3' className='category-page__trending-img' />
                            </article>
                            <article className='category-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto4' className='category-page__trending-img' />
                            </article>
                            <article className='category-page__trending-card'>
                                <img src='/public/images/00Quack.jpg' alt='recommendedphoto5' className='category-page__trending-img' />
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default ColllectionsPage