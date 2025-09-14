# TODO: Update Biotechnology and Agriculture Books Pages

## Tasks
- [x] Update app/books/Biotechnology/page.tsx to add download button for students and upload/delete buttons for teachers
- [x] Change from static book list to dynamic file fetching
- [x] Add upload modal functionality for teachers
- [x] Update app/books/Agriculture/page.tsx similarly
- [x] Add upload and delete functionality to CSE-core RecommendedBooks component
- [ ] Test download and delete functionality for both

## Details
- Fetch uploaded files for Biotechnology and Agriculture books
- Show download button for all users (students)
- Show upload button for teachers
- Show delete button beside each uploaded file for teachers
- Use existing UploadModal component
- API parameters: grade="Biotechnology" or "Agriculture", subject="books", type="books"
