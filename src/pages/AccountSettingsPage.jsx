import React from 'react';
import styles from '../styles/AccountSettingsPage.module.css';

function AccountSettingsPage() {
  // static data
  const userData = {
    name: 'Marry Doe',
    email: 'Marry@Gmail.com',
    profilePic: './public/profile.png',
    bio: 'Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua.'
  };

  return (
    <div className={`page-content ${styles.settingsPage}`}>
      <div className="acc">
        <h2 className={styles.settingsTitle}>Account Settings</h2>
      </div>


      <div className={styles.profileSection}>
        <div className={styles.profileHeader}>
          <img
            src={userData.profilePic}
            alt={`${userData.name}'s profile`}
            className={styles.profilePic}
          />
          <div className={styles.profileInfo}>
            <p className={styles.profileName}>{userData.name}</p>
            <p className={styles.profileEmail}>{userData.email}</p>
          </div>
        </div>

        <p className={styles.profileBio}>{userData.bio}</p>
      </div>

      <hr className={styles.separator} />



    </div>
  );
}

export default AccountSettingsPage;