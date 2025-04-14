CREATE DATABASE "systemzero-test";
CREATE DATABASE "systemzero-dev";
CREATE ROLE app_user CREATEDB LOGIN PASSWORD 'your_password';
GRANT USAGE ON SCHEMA public TO app_user;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO app_user;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO app_user;
ALTER DATABASE "systemzero-test" OWNER TO app_user;
ALTER DATABASE "systemzero-dev" OWNER TO app_user;