import React, { useEffect, useState } from "react";
import Modal from "react-modal";

const Notification = () => {
  const [approvedLinks, setApprovedLinks] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    // Fetch the list of approved user profiles from the server
    const fetchApprovedUserProfiles = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/userprofiles/aprovallist/"
        );
        if (response.ok) {
          const data = await response.json();
          setApprovedLinks(data);
        } else {
          console.error("Failed to fetch approved user profiles");
        }
      } catch (error) {
        console.error("Error fetching approved user profiles:", error);
      }
    };

    fetchApprovedUserProfiles();
  }, []); // Run this effect only once on component mount

  const openModal = (userProfile) => {
    setSelectedUser(userProfile);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedUser(null);
  };

  // ... (other code)

  const handleApprove = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/userprofiles/update_approval/${selectedUser.id}/`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ approval: "a" }), // Change 'response' to 'approval'
        }
      );

      if (response.ok) {
        console.log(`Approved: ${selectedUser.userName}`);
        closeModal();
      } else {
        console.error(`Failed to approve: ${selectedUser.userName}`);
      }
    } catch (error) {
      console.error(`Error approving: ${selectedUser.userName}`, error);
    }
  };

  const handleReject = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/userprofiles/update_approval/${selectedUser.id}/`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ approval: "r" }), // Change 'response' to 'approval'
        }
      );

      if (response.ok) {
        console.log(`Rejected: ${selectedUser.userName}`);
        closeModal();
      } else {
        console.error(`Failed to reject: ${selectedUser.userName}`);
      }
    } catch (error) {
      console.error(`Error rejecting: ${selectedUser.userName}`, error);
    }
  };

  // ... (other code)

  return (
    <div>
      <h2>Notification</h2>
      {approvedLinks.length > 0 ? (
        <ul>
          {approvedLinks.map((userProfile) => (
            <li key={userProfile.id}>
              <a href="#" onClick={() => openModal(userProfile)}>
                {userProfile.userName} wants approval
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No approved user profiles found.</p>
      )}

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>{selectedUser?.userName} Approval</h2>
        <p>Do you want to approve or reject?</p>
        <button onClick={handleApprove}>Approve</button>
        <button onClick={handleReject}>Reject</button>
      </Modal>
    </div>
  );
};

export default Notification;
