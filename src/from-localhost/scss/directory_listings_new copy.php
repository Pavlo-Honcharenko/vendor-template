<?php
    require_once('classes/metabuilder.php');
    require_once('classes/directory_breadcrumbs.php');
    require_once('data/portfolio.php');
    require_once('classes/motd.php');

    ob_start();

    $rcmetadata = $listing->metadata;

    $pagedescription = $listing->regionname . "'s best wedding " . $listing->lower_categoryname;

    $all_vendors = array_merge($listing->vendors, $listing->featured_vendors);
    $num_vendors = count($listing->vendors) + count($listing->featured_vendors);

    $browsertitle = $pagedescription;

    $replacer = new DirectoryTokenReplacer($listing);
    $defaults = new DirectoryListingsPageDefaults($listing);

    if(!empty($rcmetadata->pagetitle)) {
        $browsertitle = $replacer->replace($rcmetadata->pagetitle);
    }
    else {
        $browsertitle = $replacer->replace($defaults->get_title());
    }

    if(strpos($browsertitle, 'Junebug Weddings') === FALSE) {
        $browsertitle .=  ' | Junebug Weddings';
    }

    if(!empty($rcmetadata->h1)) {
        $rcmetadata->h1 = $replacer->replace($rcmetadata->h1);
    }
    else {
        $rcmetadata->h1 = $replacer->replace($defaults->get_h1());
    }

    if(!empty($rcmetadata->topcopy)) {
        $rcmetadata->topcopy = $replacer->replace($rcmetadata->topcopy);
    }
    else {
        $rcmetadata->topcopy = $replacer->replace($defaults->get_top_copy());;
    }

    if(!empty($rcmetadata->greycopy)) {
        $rcmetadata->greycopy = $replacer->replace($rcmetadata->greycopy);
    }
    else {
        $rcmetadata->greycopy = $replacer->replace($defaults->get_grey_copy());
    }

    if(!empty($rcmetadata->pinkcopy)) {
        $rcmetadata->pinkcopy = $replacer->replace($rcmetadata->pinkcopy);
    }
    else {
        $rcmetadata->pinkcopy = $replacer->replace($defaults->get_pink_copy());
    }

    $builder = new MetaBuilder();

    if(!empty($rcmetadata->meta_desc)) {
        $builder->addDescription($rcmetadata->meta_desc);
    }
    else {
        $metadata = $builder->addDescription($replacer->replace($defaults->get_metadescription()));
    }

    if(!empty($rcmetadata->meta_keyword)) {
        $builder->addKeywords($rcmetadata->meta_keyword);
    }

    $metadata = $builder->html();

    if($rcmetadata->breadcrumbs) {
        $breadcrumbs = DirectoryBreadcrumbHelper::getBreadcrumbList($listing);
        if(!empty($breadcrumbs)) {
            $header_embedded_content = $breadcrumbs;
        }
    }

    $regiondisplayname = !empty($listing->regiondisplayname) ? $listing->regiondisplayname : $listing->regionname;

    // analytics.php
    $GLOBALS['ga_page_group'] = (object) ['id' => 5, 'name' => 'Listing Pages - New' ];

    $motd = new Motd();
    $motd_spacer = (!$GLOBALS['disable_motd'] && $motd->isValid()) ? 'col-contact-motd-spacer' : '';
?>

<?php if (Environment::is_local() || $GLOBALS['disable_minified_content']): ?>
    <link rel="stylesheet" href="/newhotlist/css/newhotlist.css">
<?php else: ?>
    <?php
        $build_tag = '{{{++TAG++}}}';
        $newhotlist_css = sprintf('/newportfolio/css/newhotlist.%s.min.css', $build_tag);

        // if for some reason text replacement of the tag hasn't occurred, fall back to filename without a tag
        if($build_tag === '{{{' . '++TAG++' . '}}}') {
            $newhotlist_css = '/newhotlist/css/newhotlist.min.css';
        }
    ?>
    <link rel="stylesheet" href="<?= $newhotlist_css ?>">
<?php endif; ?>

<div id="directory-listings" class="page">
    <div id="col-contact" class="<?= $motd_spacer ?>">
        <div id="contact-form-wrapper">
            <h2>The Exclusive <span>White Glove</span> Service</h2>
            <h3>Get personalized vendor recommendations curated by our team of experts. Tell us what you’re looking for below and we’ll send your custom vendor matches.</h3>
        </div>
    </div>

    <div id="col-content">
        <div id="directory-listings-wrapper">

            <div id="find-vendors-wrapper">
                <div id="breadcrumbs">
                    <?= DirectoryUtils::get_breadcrumbs($listing) ?>
                </div>

                <div id="find-vendors">
                    <div id="best-of">Best of...</div>
                    <h1><?= $listing->categoryname ?> in <?= $listing->regiondisplayname ?></h1>
                </div>
            </div>

            <div id="vendors">
                <?php
                /*
                    $featured = array();
                    $regular = array();

                    if(count($listing->featured_vendors) > 0) {
                        $featured = $listing->featured_vendors;
                        $regular = $listing->vendors;
                    }
                    else if(count($listing->vendors) == 1) {
                        $featured = array($listing->vendors[0]);
                        $regular = [ ];
                    }
                    else {
                        $regular = $listing->vendors;
                    }
                */

                $vendors = array_merge($listing->featured_vendors, $listing->vendors);
                ?>

                <?php foreach($vendors as $vendor) { ?>
                    <?php
                        $images = PortfolioHelper::get_n_portfolio_images_by_account_id($vendor->id, 3);
                    ?>
                    <div class="vendor">
                        <div class="vendor-details-wrapper">
                            <?php $uri = DirectoryUtils::get_vendor_uri($vendor); ?>
                            <h2><a href="<?= $uri ?>"><?= $vendor->name ?></a></h2>
                            <div class="vendor__location">
                                <img src="/newportfolio/img/icons/decor-geo.svg" class="icon" alt="geo">
                                Based in <?= $vendor->info->location ?>
                            </div>
                            <a href="<?= $uri ?>"><button>Explore &gt;</button></a>
                            <button>Contact Vendor &gt;</button>
                        </div>
                        <div class="vendor-images-wrapper">
                            <?php foreach($images as $image) { ?>
                                <div class="img-wrapper">
                                    <img src="<?= cms_image_path($image->thumbnail_path) ?>">
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                <?php } ?>
            </div>
        </div>
    </div>
</div>

<?php
    $body_text = ob_get_contents();
    ob_end_clean();

    include("template/desktop.php");
?>
