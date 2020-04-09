CREATE TABLE IF NOT EXISTS Users (
    id SERIAL AUTO_INCREMENT,
    username VARCHAR(40),
    email VARCHAR(80),
    password VARCHAR(80),
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS Sentry (
    id SERIAL AUTO_INCREMENT,
    object_designation VARCHAR(30),
    year_range VARCHAR(9),
    potential_impacts SMALLINT,
    impact_probability VARCHAR(20),
    velocity DECIMAL(10,7),
    abs_magnitude DECIMAL(10,7),
    est_diameter DECIMAL(10,7),
    palermo_scale_cum DECIMAL(10,7),
    palermo_scale_max DECIMAL(10,7),
    object_id VARCHAR(20),
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS NEOs (
    id SERIAL AUTO_INCREMENT,
    PHA BINARY(1),
    name VARCHAR(60),
    absolute_mag DECIMAL(15,10),
    diameter DECIMAL(15,10),
    albedo DECIMAL(15,10),
    rotation_period DECIMAL(20,10),
    epoch_cal DECIMAL(15,5),
    eccentricity DECIMAL(20, 10),
    semi_major_axis DECIMAL(20, 15),
    perihelion_distance DECIMAL(20, 15),
    inclination DECIMAL(20,10),
    long_asc_node DECIMAL(20,10),
    arg_perihelion DECIMAL(20,10),
    mean_anomaly DECIMAL(20,10),
    aphelion_distance DECIMAL(20,10),
    mean_motion DECIMAL(20,10),
    time_perihelion_passage DECIMAL(20,10),
    period DECIMAL(30,15),
    data_arc FLOAT,
    first_observation DATE,
    last_observation DATE,
    observations INTEGER,
    RMS_orbit_fit DECIMAL(20,10),
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS Fireballs (
    id SERIAL AUTO_INCREMENT,
    peak_brightness DATETIME,
    latitude VARCHAR(20),
    longitude VARCHAR(20),
    altitude DECIMAL(10,5),
    velocity DECIMAL(10,5),
    velocity_x DECIMAL(10,5),
    velocity_y DECIMAL(10,5),
    velocity_z DECIMAL(10,5),
    radiated_energy VARCHAR(10),
    impact_energy DECIMAL(10,5),
    PRIMARY KEY(id)
);
