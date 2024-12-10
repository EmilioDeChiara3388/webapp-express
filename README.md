## Entities

- Movies;
- Reviews

## Movies: table structure
- id | BIGINT - AI - PRIMARY KEY (NOTNULL, UNIQUE) 
- title | VARCHAR(50) - NOTNULL
- director | VARCHAR(50) - NOTNULL
- genre | VARCHAR(30) - NOTNULL
- release_year | YEAR - NOTNULL
- abstract | TEXT(500) - NOTNULL
- image | VARCHAR(500) - NULL
- created_at | DATE
- updated_at | DATE

## Reviews: table structure
- id | BIGINT - AI - PRIMARY KEY (NOTNULL, UNIQUE)
- movie_id | FK
- name | VARCHAR(50) - NOTNULL
- vote | TINYINT - NOTNULL
- text | TEXT(500) - NOTNULL
- created_at | DATE
- updated_at | DATE