import { useState } from '@wordpress/element';

const SocialMediaForm = () => {
    const [isActive, setIsActive] = useState(false);

    const [facebook, setFacebook] = useState('');
    const [twitter, setTwitter] = useState('');
    const [instagram, setInstagram] = useState('');
    const [youtube, setYouTube] = useState('');
    const [linkedin, setLinkedIn] = useState('');
    const [yelp, setYelp] = useState('');
    const [tiktok, setTikTok] = useState('');

    const handleAccordion = (e) => {
        setIsActive(!isActive);
    }

    const handleChange = (e, social) => {
        switch(social){
            case 'facebook': 
                setFacebook(e.target.value);
                break;
            case 'twitter':
                setTwitter(e.target.value);
                break;
            case 'instagram':
                setInstagram(e.target.value);
                break;
            case 'youtube':
                setYouTube(e.target.value);
                break;
            case 'linkedin':
                setLinkedIn(e.target.value);
                break;
            case 'yelp':
                setYelp(e.target.value);
                break;
            case 'tiktok':
                setTikTok(e.target.value);
                break;
        }
    }

    return (
        <div className="social-form">
            <div className="social-form__top-row" onClick={(e) => { handleAccordion(e)}}>
                <div className="social-form__top-row_heading">Social Media</div>
                <div className={`social-form__top-row_icon ${isActive ? 'social-form__top-row_icon_opened' : ''}`}></div>
            </div>
            <form style={{ display: isActive ? '' : 'none'}} onSubmit={(e) => { handleSubmit(e) }}>
                <label className='social-form__label' >
                    <div className="social-form__label_icon" style={{ backgroundImage: 'var(--facebook-icon)' }}/>
                    <div className="social-form__label_name">Facebook</div>
                </label>
                <input className="social-form__box" type="text" value={facebook} onChange={(e) => { handleChange(e, 'facebook') }} /><br />
                <label className='social-form__label' >
                    <div className="social-form__label_icon" style={{ backgroundImage: 'var(--twitter-icon)' }}/>
                    <div className="social-form__label_name">Twitter</div>
                </label>
                <input className="social-form__box" type="text" value={twitter} onChange={(e) => { handleChange(e, 'twitter') }} /><br />
                <label className='social-form__label' >
                    <div className="social-form__label_icon" style={{ backgroundImage: 'var(--facebook-icon)' }}/>
                    <div className="social-form__label_name">Instagram</div>
                </label>
                <input className="social-form__box" type="text" value={instagram} onChange={(e) => { handleChange(e, 'instagram') }} /><br />
                <label className='social-form__label' >
                    <div className="social-form__label_icon" style={{ backgroundImage: 'var(--facebook-icon)' }}/>
                    <div className="social-form__label_name">YouTube</div>
                </label>
                <input className="social-form__box" type="text" value={youtube} onChange={(e) => { handleChange(e, 'youtube') }} /><br />
                <label className='social-form__label' >
                    <div className="social-form__label_icon" style={{ backgroundImage: 'var(--facebook-icon)' }}/>
                    <div className="social-form__label_name">LinkedIn</div>
                </label>
                <input className="social-form__box" type="text" value={linkedin} onChange={(e) => { handleChange(e, 'linkedin') }} /><br />
                <label className='social-form__label' >
                    <div className="social-form__label_icon" style={{ backgroundImage: 'var(--facebook-icon)' }}/>
                    <div className="social-form__label_name">Yelp</div>
                </label>
                <input className="social-form__box" type="text" value={yelp} onChange={(e) => { handleChange(e, 'yelp') }} /><br />
                <label className='social-form__label' >
                    <div className="social-form__label_icon" style={{ backgroundImage: 'var(--facebook-icon)' }}/>
                    <div className="social-form__label_name">TikTok</div>
                </label>
                <input className="social-form__box" type="text" value={tiktok} onChange={(e) => { handleChange(e, 'tiktok') }} /><br />
            </form>
        </div>
    );
};

export default SocialMediaForm;
