LOAD DATA LOCAL INFILE '~/public_html/data/Fireballs.csv' INTO TABLE Fireballs FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS
    (peak_brightness, latitude, longitude, velocity, velocity_x, velocity_y, velocity_z, radiated_energy, impact_energy);

LOAD DATA LOCAL INFILE '~/public_html/data/Sentry.csv' INTO TABLE Sentry FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS
    (object_designation, year_range, potential_impacts, impact_probability, velocity, abs_magnitude, est_diameter, palermo_scale_cum, palermo_scale_max, object_id);

LOAD DATA LOCAL INFILE '~/public_html/data/NEOs.csv' INTO TABLE NEOs FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS
    (PHA, name, absolute_mag, diameter, albedo, rotation_period, epoch_cal, eccentricity, semi_major_axis, perihelion_distance,
     inclination, long_asc_node, arg_perihelion, mean_anomaly, aphelion_distance, mean_motion, time_perihelion_passage, period,
     data_arc, first_observation, last_observation, observations, RMS_orbit_fit);

LOAD DATA LOCAL INFILE '~/public_html/data/PHA.csv' INTO TABLE NEOs FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS
    (PHA, name, absolute_mag, diameter, albedo, rotation_period, epoch_cal, eccentricity, semi_major_axis, perihelion_distance,
     inclination, long_asc_node, arg_perihelion, mean_anomaly, aphelion_distance, mean_motion, time_perihelion_passage, period,
     data_arc, first_observation, last_observation, observations, RMS_orbit_fit);
